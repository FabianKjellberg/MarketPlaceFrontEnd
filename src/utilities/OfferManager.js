import React from "react";
import { useState } from "react";
import axios from 'axios';

class OfferManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async getOffers(token) {
        const returnData = await this.axiosInstance.get('/offer/getOffers', {headers: {
            Authorization: `Bearer ${token}`
        },})
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                console.error('Error retrieving listings', error);
                return [];
            });
        return returnData;
    }

    async acceptOffer(productId, token) {
        const returnData = await this.axiosInstance.put(`offer/acceptOffer/${productId}`, {headers: {
            Authorization: `Bearer ${token}`
        },})
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                console.error('Error retrieving listings', error);
                return [];
            });
        return returnData;
    }

    async rejectOffer(productId, token) {
        const returnData = await this.axiosInstance.put(`offer/rejectOffer/${productId}`, {headers: {
            Authorization: `Bearer ${token}`
        },})
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                console.error('Error retrieving listings', error);
                return [];
            });
        return returnData;
    }

}

export default OfferManager;