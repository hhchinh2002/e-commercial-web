import axios, { isAxiosError } from "axios";
import HttpStatusCode from "../../types/HttpStatusCode";
import { Product } from "src/types/IProduct";
import { ErrorResponse } from "react-router-dom";

const url = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3002";
const apiUrl = url + "/products";
const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  },
});

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get(
      `/getProducts`,
    );
    if (response.status === HttpStatusCode.OK.valueOf()) {
      const user = response.data as Product[];
      return user;
    } else {
      throw new Error("Unknown error getting products");
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error?.response?.data) {
        const responseData = error.response as ErrorResponse;
        throw new Error(responseData.data.message);
      }
    }
    throw new Error("Unknown error getting products");
  }
};

const createProduct = async (product: Product) => {
  try {
    const {name, description, price, quantity, scent, size, weight, imageUrl, category, rating} = product
    await api.post(`/createProduct`, {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      scent: scent,
      size: size,
      weight: weight,
      imageUrl: imageUrl,
      category: category,
      rating: rating,
      createdAt: Date.prototype.getTime(),
      updatedAt: Date.prototype.getTime(),
    });
  } catch (error) {
    if (isAxiosError(error) && error?.response?.data) {
      const responseData = error.response as ErrorResponse;
      throw new Error(responseData.data.message);
    }
    throw new Error("Unknown error creating product, please try again");
  }
};

// const getUserInfo = async (uid: number): Promise<UserInfo | null> => {
//   try {
//     const response = await api.get(`/getUserInfo?uid=${uid}`, {
//       withCredentials: true,
//     });
//     if (response.status === HttpStatusCode.OK.valueOf()) {
//       const responseData = response.data as UserInfo;
//       const userInfo: UserInfo = {
//         name: responseData.name,
//         email: responseData.email,
//         bio: responseData.bio || "This person doesn't have bio",
//         avatarUrl: responseData.avatarUrl,
//       };
//       return userInfo;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response?.status === HttpStatusCode.UNAUTHORIZED.valueOf()) {
//         throw new Error("Unauthorize");
//       } else if (error?.response?.data) {
//         const responseData = error.response as ErrorResponse;
//         throw new Error(responseData.data.message);
//       }
//     }
//     throw new Error("Unknown getting user information, please try again");
//   }
// };

// const getAllStudents = async (uid: number): Promise<StudentInfo[] | null> => {
//   try {
//     const response = await api.get(`/getAllStudents?uid=${uid}`, {
//       withCredentials: true,
//     });
//     if (response.status === HttpStatusCode.OK.valueOf()) {
//       const responseData = response.data as StudentInfo[];
//       const studentInfos: StudentInfo[] = responseData.map((student) => ({
//         name: student.name,
//         uid: student.uid,
//       }));
//       return studentInfos;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response?.status === HttpStatusCode.UNAUTHORIZED.valueOf()) {
//         throw new Error("Unauthorize");
//       } else if (error?.response?.data) {
//         const responseData = error.response as ErrorResponse;
//         throw new Error(responseData.data.message);
//       }
//     }
//     throw new Error("Unknown getting user information, please try again");
//   }
// };

// const updateUserPassword = async (
//   uid: number,
//   oldPassword: string,
//   newPassword: string
// ) => {
//   try {
//     const response = await api.put(
//       `/updateUserPassword`,
//       {
//         uid: uid,
//         old_password: oldPassword,
//         new_password: newPassword,
//       },
//       { withCredentials: true }
//     );
//     if (response.status === HttpStatusCode.OK.valueOf()) {
//       return;
//     } else {
//       return new Error("Unknown error updating password, please try again");
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response?.status === HttpStatusCode.UNAUTHORIZED.valueOf()) {
//         throw new Error("Unauthorize");
//       } else if (
//         error.response?.status === HttpStatusCode.FORBIDDEN.valueOf()
//       ) {
//         throw new Error("Incorrect password");
//       } else if (error?.response?.data) {
//         const responseData = error.response as ErrorResponse;
//         throw new Error(responseData.data.message);
//       }
//     }

//     throw new Error("Unknown error updating password, please try again");
//   }
// };

// const updateUserInfo = async (
//   uid: number,
//   updateFields: Record<string, string>
// ): Promise<void> => {
//   try {
//     const response = await api.put(`/updateUserInfo?uid=${uid}`, updateFields, {
//       withCredentials: true,
//     });

//     if (response.status === HttpStatusCode.OK.valueOf()) {
//       return;
//     } else {
//       throw new Error("Unknown error updating user info, please try again");
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response?.status === HttpStatusCode.UNAUTHORIZED.valueOf()) {
//         throw new Error("Unauthorized action, please login again");
//       } else if (error?.response?.data) {
//         const responseData = error.response as ErrorResponse;
//         throw new Error(responseData.data.message);
//       }
//     }
//     throw new Error("Unknown error updating user info, please try again");
//   }
// };

// const clearCookie = async () => {
//   await api.delete(`/clearCookie`, { withCredentials: true });
// };

const productService = {
  getProducts,
  createProduct
};

export default productService;