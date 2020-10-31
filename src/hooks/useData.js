import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useDays() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_PATH}/alldata`,
    fetcher
  );
  return {
    ...data,
    isLoading: !error && !data,
    isError: error,
  };
}
