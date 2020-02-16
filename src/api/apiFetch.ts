interface ApiResponse {
  data?: any;
  error?: string;
}

export type ApiFetch = (url: string, init?: RequestInit) => Promise<ApiResponse>;

export const createApiFetch = (apiBaseUrl: string): ApiFetch => async (url, init) => {
  try {
    const response = await fetch(apiBaseUrl + url, init);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return { data };
  } catch (e) {
    return {
      error: e.message,
    };
  }
};
