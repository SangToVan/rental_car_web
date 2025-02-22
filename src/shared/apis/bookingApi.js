import { generateMetaSearchParams } from '../utils'
import axiosInstance from '../utils/authorizedAxios'

export const getBookingDetailsApi = async (bookingId) => {
  const res = await axiosInstance.get(`bookings/${bookingId}`)
  return res.data
}

export const updateBookingApi = async (bookingId, updateData) => {
  const res = await axiosInstance.patch(`bookings/own/${bookingId}`, updateData)
  return res.data
}

export const getMyBookingApi = async ({
  page = 1,
  size = 5,
  sort = 'id:desc'
}) => {
  const searchParams = generateMetaSearchParams(page, size, sort)
  const res = await axiosInstance.get(`bookings/own?${searchParams}`)
  return res.data
}

export const addBookingApi = async (data) => {
  const res = await axiosInstance.post('bookings', data)
  return res.data
}

export const confirmPickUpApi = async (id) => {
  const res = await axiosInstance.patch(`bookings/${id}/confirm-pickup`)
  return res.data
}

export const confirmPaymentApi = async (id) => {
  const res = await axiosInstance.patch(`bookings/${id}/confirm-payment`)
  return res.data
}

export const confirmDepositApi = async (id) => {
  const res = await axiosInstance.patch(`bookings/${id}/confirm-deposit`)
  return res.data
}

export const cancelBookingApi = async (id) => {
  const res = await axiosInstance.patch(`bookings/${id}/cancel`)
  return res.data
}

export const returnCarApi = async (id) => {
  const res = await axiosInstance.patch(`bookings/${id}/return-car`)
  return res.data
}

export const addFeedbackApi = async (id, data) => {
  const res = await axiosInstance.post(`bookings/${id}/feedback`, data)
  return res.data
}
