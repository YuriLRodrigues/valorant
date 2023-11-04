type FetchDataProps = {
  url: string;
};

export const FetchData = async ({ url }: FetchDataProps) => {
  try {
    const res = await fetch(url, {
      cache: "force-cache"
    });
    const result = await res.json();
    return result;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};
