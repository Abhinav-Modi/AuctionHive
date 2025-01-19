/* eslint-disable @typescript-eslint/no-empty-object-type */
import { auth } from "@/auth";

const baseUrl = "http://localhost:6001";

const get = async (url: string) => {
	const requestOptions = {
		method: "GET",
		headers: await getHeaders(),
	};
	const res = await fetch(baseUrl + url, requestOptions);
	return handleResponse(res);
};

const post = async (url: string, body: {}) => {
	const requestOptions = {
		method: "POST",
		headers: await getHeaders(),
		body: JSON.stringify(body),
	};
	const res = await fetch(baseUrl + url, requestOptions);
	console.log("post res", res);
	return handleResponse(res);
};

const put = async (url: string, body: {}) => {
	const requestOptions = {
		method: "PUT",
		headers: await getHeaders(),
		body: JSON.stringify(body),
	};
	const res = await fetch(baseUrl + url, requestOptions);
	return handleResponse(res);
};
const del = async (url: string) => {
	const requestOptions = {
		method: "DELETE",
		headers: await getHeaders(),
	};
	const res = await fetch(baseUrl + url, requestOptions);
	return handleResponse(res);
};

const getHeaders = async () => {
	const session = await auth();
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${session?.accessToken}`,
	};
};

const handleResponse = async (res: Response) => {
	const text = await res.text();

	const data = text && JSON.parse(text);
	console.log("handleResponse data", data);
	if (res.ok) {
		return data;
	} else {
		const error = (data && data.message) || res.statusText;
		return Promise.reject(error);
	}
};

export const fetchWrapper = { get, post, put, del };
