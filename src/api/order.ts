import axiosInstance, { endpoints } from "src/utils/axios";

// ----------------------------------------------------------------------

export function useGetOrderedServiceLists() {
  // const URL = endpoints.product.list;
  const tempProducts = [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "User 1",
      location: "Service 1",
      graveyard: "Graveyard 1",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: true,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "User 1",
      location: "Service 2",
      graveyard: "Graveyard 2",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: false,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      name: "User 2",
      location: "Service 2",
      graveyard: "Graveyard 2",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: false,
    },
  ];
  // const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const tempData = {
    products: tempProducts,
    productsLoading: false,
    productsValidating: false,
    productsEmpty: false,
  };
  // const memoizedValue = useMemo(() => tempData, [tempData]);

  return tempData;
}

export const createOrder = async (query: any) => {
  const res = await axiosInstance.post(endpoints.order.create, {
    order: query,
  });

  const memoizedValue = {
    results: res?.data || [],
  };

  return memoizedValue;
};
