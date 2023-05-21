'use strict';

import express from 'express';
const router = express.Router();

import mock from '../mocks/entries.json' assert { type: "json"}

router.get('/api/entries/get', (req, res) => {
    res.json(mock)
});

export default router