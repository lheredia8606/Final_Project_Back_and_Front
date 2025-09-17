export const apiHandlerThree = <T>(baseUrl: string, endPoint: string) => {
  const urlEndpoint = `${baseUrl}${endPoint}`;
  return {
    getAll: () => {
      return fetch(urlEndpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        return result.data;
      });
    },
    get: (id: string): Promise<T> => {
      return fetch(`${urlEndpoint}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        return result.data;
      });
    },
    /**
     *
     * @param {Omit<T,"id">} newElement
     * @returns Promise that resolve in T
     */
    post: (newElement: Omit<T, "id">): Promise<T> => {
      return fetch(urlEndpoint, {
        method: "POST",
        body: JSON.stringify(newElement),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        return result.data;
      });
    },
    /**
     *
     * @param {string} id
     * @returns Promise
     */
    delete: (id: string): Promise<T> => {
      return fetch(`${urlEndpoint}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        return result.data;
      });
    },

    /**
     *
     * @param {string} id
     * @param {Partial<Omit<T,"id">>}elementToUpdate
     * @returns Promise that resolve in T
     */
    update: (
      id: string,
      elementToUpdate: Partial<Omit<T, "id">>
    ): Promise<T> => {
      return fetch(`${urlEndpoint}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(elementToUpdate),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        },
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        return result.data;
      });
    },
  };
};
