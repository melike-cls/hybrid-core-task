import axios from "axios";

const baseURL = "https://api.server.test/v1"; // API URL'si

// Video yükleme işlemi
export const uploadVideo = async (videoFile) => {
  try {
    const formData = new FormData();
    formData.append("video", videoFile);

    const response = await axios.post(`${baseURL}/file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Video uploaded successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw new Error("An error occurred while uploading the video.");
  }
};

// Resim yükleme işlemi
export const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(`${baseURL}/file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Image uploaded successfully:", response.data);
    return response.data; // Sunucudan gelen yanıtı döndürür (örneğin, resim dosyasının URL'si)
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("An error occurred while uploading the image.");
  }
};

// Belge yükleme işlemi
export const uploadDocument = async (documentFile) => {
  try {
    const formData = new FormData();
    formData.append("document", documentFile);

    const response = await axios.post(`${baseURL}/file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Document uploaded successfully:", response.data);
    return response.data; // Sunucudan gelen yanıtı döndürür (örneğin, belge dosyasının URL'si)
  } catch (error) {
    console.error("Error uploading document:", error);
    throw new Error("An error occurred while uploading the document.");
  }
};

// Component oluşturma işlemi
export const createComponent = async (componentData) => {
  try {
    const response = await axios.post(`${baseURL}/component`, componentData);
    console.log("Component created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating component:", error);
    throw new Error("An error occurred while creating the component.");
  }
};

// Component güncelleme işlemi
export const updateComponent = async (componentId, updatedData) => {
  try {
    const response = await axios.put(
      `${baseURL}/component/${componentId}`,
      updatedData
    );
    console.log("Component updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating component:", error);
    throw new Error("An error occurred while updating the component.");
  }
};

// Diğer API işlemleri buraya eklenebilir

export default {
  uploadVideo,
  createComponent,
  updateComponent,
  uploadImage,
  uploadDocument,
  uploadVideo,
};
