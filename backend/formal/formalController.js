const Formal = require('./formalModel');

let getFormalEntities = async (req, res) => {
  // Pagination
  let perPage = 30
  let page = Math.max(0, req.params.page)
  try {
    let formalEntities = await Formal.find({}).limit(perPage).skip(perPage * page)
    res.json(formalEntities);
  } catch (e) {
    res.status(400).json(e);
  }
}

let getAllFormalEntities = async (req, res) => {
  try {
    let formalEntities = await Formal.find({});
    res.json(formalEntities);
  } catch (e) {
    res.status(400).json(e);
  }
}

let getFormalEntity = async (req, res) => {
  let id = req.params.id;
  try {
    let formalEntity = await Formal.findOne({
      _id: id,
    });
    res.json(formalEntity);
  } catch (e) {
    res.status(400).json(e);
  }
}

let postFormalEntity = async (req, res) => {
  let formalEntity = new Formal(req.body);
  try {
    let savedFormalEntity = await formalEntity.save();
    res.json(savedFormalEntity);
  } catch (e) {
    res.status(400).json(e);
  }
};

let filterFormalEntities = async (req, res) => {
  try {

    let {filterByAddress, filterByName, filterByCode} = req.body
    let filteredEntities
    // Initial data from DB
    filteredEntities = await Formal.find({})
    // Filter by code
    filterByCode ? filteredEntities = filteredEntities.filter(entity => entity.code === filterByCode) : filteredEntities
    // Filter by address
    filterByAddress && filterByAddress.forEach(address => {
      let regEx = new RegExp(address, "i")
      filteredEntities = filteredEntities.filter(entity => regEx.test(entity.address))
    })
    // Filter by name
    filterByName && filterByName.forEach(name => {
      let regEx = new RegExp(name, "i")
      filteredEntities = filteredEntities.filter(entity => regEx.test(entity.name))
    })

    res.json(filteredEntities)
  } catch (err) {
    res.status(400).json(err)
  }
}

let deleteFormalEntity = async (req, res) => {
  let formalEntityId = req.params.id;
  try {
    let deletedFormalEntity = await Formal.findOneAndDelete({
      _id: formalEntityId,
    });
    res.json(deletedFormalEntity);
  } catch (err) {
    res.status(404).json(err);
  }
};

let updateFormalEntity = async (req, res) => {
  let formalEntityId = req.params.id;
  try {
    let updatedFormalEntity = await Formal.findByIdAndUpdate(
      {
        _id: formalEntityId,
      },
      req.body
    );
    res.json(updatedFormalEntity)
  } catch {
    res.status(404).json(err)
  }
};



module.exports = {
  getFormalEntities,
  getFormalEntity,
  postFormalEntity,
  filterFormalEntities,
  deleteFormalEntity,
  updateFormalEntity,
  getAllFormalEntities
}
