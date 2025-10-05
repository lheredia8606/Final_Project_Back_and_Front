import { baseUrl } from "../utils/ApplicationTypesAndGlobals";

export const apiHandler = <T>(endPoint: string) => {
  const urlEndpoint = `${baseUrl}${endPoint}`;

  const processResponse = async (response: Response) => {
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result?.message ?? "Unknown API error");
    }
    return result.data;
  };

  return {
    /**
     * Retrieves a list of resources from the API with optional query parameters.
     *
     * @param mod: Record<string,string>
     * @example {userRole: worker}
     * Fetch all resources
     * @returns Promise that resolves to T[]
     */
    getAll: async (mod: Record<string, string> = {}): Promise<T[]> => {
      const modifier = Object.entries(mod)
        .map(([param, value]) => {
          return `${param}=${value}`;
        })
        .join("&");
      const response = await fetch(`${urlEndpoint}?${modifier}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      });
      return processResponse(response);
    },

    /**
     * Fetch a resource by id
     */
    getById: async (id: number, mod: string = ""): Promise<T> => {
      const response = await fetch(`${urlEndpoint}/${id}/${mod}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      });
      return processResponse(response);
    },

    /**
     * Create a new resource
     */
    create: async (data: Omit<T, "id">): Promise<T> => {
      const response = await fetch(urlEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
        body: JSON.stringify(data),
      });
      return processResponse(response);
    },

    /**
     * Update a resource by id
     */
    update: async (
      id: string | number,
      data: Partial<Omit<T, "id">>
    ): Promise<T> => {
      const response = await fetch(`${urlEndpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
        body: JSON.stringify(data),
      });
      return processResponse(response);
    },

    /**
     * Delete a resource by id
     */
    remove: async (id: string | number): Promise<void> => {
      const response = await fetch(`${urlEndpoint}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      });
      return processResponse(response);
    },
  };
};
