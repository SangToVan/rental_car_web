import { convertToQueryParams, generateMetaSearchParams } from '../utils'
import axiosInstance from '../utils/authorizedAxios'

export const getTransactionsApi = async (
  page = 0,
  size = 10,
  sort = 'id:desc',
  dateFilter
) => {
  const metaParams = generateMetaSearchParams(page, size, sort)
  const searchParams = convertToQueryParams(dateFilter)
  const res = await axiosInstance.get(
    `transactions?${metaParams}&${searchParams}`
  )
  return res.data
}
