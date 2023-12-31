import { useQuery } from 'react-query'
import {
  UsersApi,
  RankingApi,
  Configuration,
  RankingGroupNameGet201Response,
} from '../api/generated'

const conf = new Configuration({
  basePath: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})
const api = new RankingApi(conf)

export interface FetchRankingProps {
  groupName: string
}

export const fetchRanking = ({
  groupName,
}: FetchRankingProps): Promise<RankingGroupNameGet201Response> => {
  return api.rankingGroupNameGet({ groupName })
}

export const useFetchRanking = ({ groupName }: FetchRankingProps) => {
  return useQuery('rankingData', () => fetchRanking({ groupName }))
}
