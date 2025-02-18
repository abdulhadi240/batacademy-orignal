"use server";

export async function GetCategory(slug) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/categories/${slug}/specialization`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    const category = await response.json();
    return category.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}


export async function GetAllCategory() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/categories/`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    const category = await response.json();
    return category.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

export async function GetSpecialization() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/specializations_categories`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    const category = await response.json();
    return category.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}



export async function GetSpecificSpecialization(slug) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/courses/${slug}/specializations`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    const category = await response.json();
    return category;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}



export async function GetCities() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/cities`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    const category = await response.json();
    return category.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}


export default async function fetchData(url, locale) {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}${url}`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
    });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${url}, Status: ${res.status}`);
    }

    const result = await res.json();

    // Check if response contains a successful status code and valid data structure
    if (result.code !== 200) {
      throw new Error(`API returned an error. Status Code: ${result.code}, Message: ${result.message}`);
    }

    if (!result || !result.data) {
      throw new Error('Invalid response structure, missing "data" field');
    }

    return result.data; // Return the full response (including pagination details)
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null; // Return null on error
  }
}

