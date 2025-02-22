import { generateMetaSearchParams } from '../utils'
import axiosInstance from '../utils/authorizedAxios'

export const getMyFeedbackApi = async (page = 1, size = 5, rating) => {
  const metaParams = generateMetaSearchParams(page, size, 'id:desc')
  const ratings = [1, 2, 3, 4, 5]
  let ratingParam = ''
  if (ratings.some((item) => item == rating)) ratingParam = `&rating=${rating}`
  const res = await axiosInstance.get(
    `feedbacks/own?${metaParams + ratingParam}`
  )
  return res.data
}

export const getRatingApi = async () => {
  const res = await axiosInstance.get('feedbacks/rating')
  return res.data
}
