import { API_URLS, HEADERS } from '../constants/constants';

export function getApiUrl(endpoint: string): string {
    return `${API_URLS.BASE_URL}${endpoint}`;
}

function getDefaultHeaders(): HeadersInit {
    return HEADERS;
}

async function makeRequest<T>(url: string, method: string, body?: any, responseType?: string): Promise<T> {

        const response = await fetch(url, {
            method,
            headers: getDefaultHeaders(),
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const errorMessage = `Network response was not ok: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else if (responseType === 'blob') {
            return (await response.blob()) as unknown as T;
        } else {
            return {} as T;
        }

}


export async function postRequest<T>(url: string, body: any): Promise<T> {
    return makeRequest<T>(url, 'POST', body);
}

export async function putRequest<T>(url: string, body: any): Promise<T> {
    return makeRequest<T>(url, 'PUT', body);
}

export async function getRequest<T>(url: string, headers?: HeadersInit): Promise<T> {
    const response = await fetch(url, {
        method: 'GET',
        headers: headers ? headers : {},
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}
