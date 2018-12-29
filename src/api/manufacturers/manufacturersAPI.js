import express from 'express';
import {
  getAllManufacturers
  , getManufacturerById
  , insertManufacturer
  , updateManufcturer
  , deleteManufacturerById
} from './manufacturersController';

const router = express.Router();

router.get('/', getAllManufacturers);
router.get('/:manufacturerId', getManufacturerById);
router.post('/', insertManufacturer);
router.put('/:manufacturerId', updateManufcturer);
router.delete('/:manufacturerId', deleteManufacturerById);

export default router;
