import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IAddBook, IBook } from "@/models/book.model";
import { addBook } from "@/services/book.service";
import { uploadPdfToCloudinary } from "@/utils/pdfUpload";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input, message, Modal, Upload, Spin } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddBookModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const AddBook = ({
  isModalOpen,
  setIsModalOpen,
  setBooks,
}: IAddBookModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddBook>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [pdfData, setPdfData] = useState<string | null>(null);

  const [pdfUploading, setPdfUploading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const onSubmit = async (data: IBook) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("book_name", data.book_name);
      formData.append("author_name", data.author_name);

      if (pdfData) formData.append("pdf_file", pdfData);
      else {
        message.error("No PDF uploaded");
        setLoading(false);
        return;
      }

      if (imageData) formData.append("cover_image", imageData);

      const response = await addBook(formData);
      setBooks(response);
      message.success("Book added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding book:", error);
      message.error("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (image: string | File | null) => {
    setImageData(image as File);
  };

  return (
    <Modal
      key="add-book-modal"
      title="Add Book"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Book Name */}
        <div className="general-input-wrapper">
          <label className="general-label">Book Name</label>
          <Controller
            name="book_name"
            control={control}
            rules={{ required: "Book name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter book name" className="general-input" />
            )}
          />
          {errors.book_name && (
            <p style={{ color: "red", marginTop: 5 }}>{errors.book_name.message}</p>
          )}
        </div>

        {/* Author Name */}
        <div className="general-input-wrapper">
          <label className="general-label">Author Name</label>
          <Controller
            name="author_name"
            control={control}
            rules={{ required: "Author name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter author name" className="general-input" />
            )}
          />
          {errors.author_name && (
            <p style={{ color: "red", marginTop: 5 }}>{errors.author_name.message}</p>
          )}
        </div>

        {/* PDF Upload */}
        <div className="general-pdf-wrapper">
          <label className="general-label">Upload PDF</label>
          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={async (file) => {
              setPdfUploading(true);
              try {
                const url = await uploadPdfToCloudinary(file);
                setPdfData(url);
                message.success("PDF uploaded successfully!");
              } catch (err: any) {
                message.error(err.message || "PDF upload failed!");
              } finally {
                setPdfUploading(false);
              }
              return Upload.LIST_IGNORE;
            }}
            onRemove={() => setPdfData(null)}
            fileList={
              pdfData
                ? [{ uid: "-1", name: "Uploaded PDF", status: "done", url: pdfData }]
                : []
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ opacity: pdfUploading ? 0.5 : 1 }}>
                <CoreButton text="Click" type="basic" icon={<UploadOutlined />} />
              </div>
              {pdfUploading && <Spin indicator={<LoadingOutlined spin />} />}
            </div>
          </Upload>
        </div>

        {/* Feature Image Upload */}
        <div className="general-input-wrapper">
          <label className="general-label">Feature Image</label>
          <div style={{ cursor: "pointer", maxWidth: 76 }}>
            <div style={{ opacity: imageUploading ? 0.5 : 1 }}>
              <CoreImageUploader
                onImageUpload={handleImageUpload}
                onUploadingChange={setImageUploading} // parent tracks loading
              />
            </div>
            {imageUploading && <Spin indicator={<LoadingOutlined spin />} />}
          </div>
        </div>

        {/* Submit Button */}
        <CoreButton text="Add" type="primary" htmlType="submit" loading={loading} />
      </form>
    </Modal>
  );
};

export default AddBook;
