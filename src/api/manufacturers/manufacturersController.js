import Manufacturer from './manufacturer';

export const getAllManufacturers = async (req, res, next) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers)
  }catch(error) {
    console.log(error);
  }
};

export const getManufacturerById = (req, res, next) => {
  try {
    const id =  req.params.id;
    const manufacturer = await Manufacturer.findById(id);
    res.status(200).json(manufacturer);
  }catch(error) {
    console.log(error);
  }
};

export const getCategories = (req, res) => {
  console.log('12')
  Category.find()
    .then(categories => res.json({ categories }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
};

export const postCategory = (req, res) => {
  if(req.body.category){
    const { name } = req.body.category;
    const cat = new Category({ name });
    cat.save()
      .then(category => {
        res.json({ category });
      })
      .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
  }else{
    res.status(400).json({});
  }
};

