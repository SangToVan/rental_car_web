import { generateMetaSearchParams } from "../utils";
import axiosInstance from "../utils/authorizedAxios";

export const getDashboardAPI = async (body) => {
  const res = await axiosInstance.get("admin/total", body);
  return res.data;
};

export const exportAPI = async (id) => {
  const res = await axiosInstance.get(`admin/export/${id}`);
  return res.data;
};

// USERS
export const addNewUserAPI = async (body) => {
  const res = await axiosInstance.post("admin/users", body);
  return res.data;
};

export const adminFetchUsersAPI = async ({
  page = 1,
  size = 5,
  sort = "id:desc",
}) => {
  const searchParams = generateMetaSearchParams(page, size, sort);
  const res = await axiosInstance.get(`admin/users?${searchParams}`);
  return res.data;
};

export const adminGetUserDetailsAPI = async (id) => {
  const res = await axiosInstance.get(`admin/users/${id}`);
  return res.data;
};

export const adminUpdateUserAPI = async (id, data) => {
  const res = await axiosInstance.patch(`admin/users/${id}`, data);
  return res.data;
};

export const deleteUserAPI = async (id) => {
  const res = await axiosInstance.delete(`admin/users/${id}`);
  return res.data;
};

// CARS
export const addNewCarAPI = async (body) => {
  const res = await axiosInstance.post("admin/cars", body);
  return res.data;
};

export const adminFetchCarsAPI = async ({
  page = 1,
  size = 5,
  sort = "id:desc",
}) => {
  const searchParams = generateMetaSearchParams(page, size, sort);
  const res = await axiosInstance.get(`admin/cars?${searchParams}`);
  return res.data;
};

export const adminGetCarDetailsAPI = async (id) => {
  const res = await axiosInstance.get(`admin/cars/${id}`);
  return res.data;
};

export const adminUpdateCarAPI = async (id, data) => {
  const res = await axiosInstance.patch(`admin/cars/${id}`, data);
  return res.data;
};

export const adminToggleCarStatusAPI = async (id) => {
  const res = await axiosInstance.patch(`admin/cars/${id}/status`);
  return res.data;
};

export const deleteCarAPI = async (id) => {
  const res = await axiosInstance.delete(`admin/cars/${id}`);
  return res.data;
};

// BOOKINGS
export const adminFetchBookingsAPI = async ({
  page = 1,
  size = 5,
  sort = "id:desc",
}) => {
  const searchParams = generateMetaSearchParams(page, size, sort);
  const res = await axiosInstance.get(`admin/bookings?${searchParams}`);
  return res.data;
};
