const Informal = require('./informalModel');

let getInformalEntities = async (req, res) => {
  // Pagination
  let perPage = 30
  let page = Math.max(0, req.params.page)
  try {
    let informalEntities = await Informal.find({}).limit(perPage).skip(perPage * page)
    res.json(informalEntities);
  } catch (e) {
    res.status(401).json(e);
  }
}

let getAllInformalEntities = async (req, res) => {
  try {
    let informalEntities = await Informal.find({})
    res.json(informalEntities);
  } catch (e) {
    res.status(401).json(e);
  }
}

let getInformalEntity = async (req, res) => {
  let id = req.params.id;
  try {
    let informalEntity = await Informal.findOne({
      _id: id,
    });
    res.json(informalEntity);
  } catch (e) {
    res.status(401).json(e);
  }
};

let postInformalEntity = async (req, res) => {
  let informalEntity = new Informal(req.body);
  try {
    let savedInformalEntity = await informalEntity.save();
    res.json(savedInformalEntity);
  } catch (e) {
    res.status(401).json(e);
  }
};

let filterInformalEntities = async (req, res) => {
  try {

    let {filterByAddress, filterByName, filterByCode} = req.body
    let filteredEntities
    // Initial data from DB
    filteredEntities = await Informal.find({})
    // Filter by code
    filterByCode ? filteredEntities = filteredEntities.filter(entity => entity.code === filterByCode) : filteredEntities
    // Filter by address
    filterByAddress && filterByAddress.forEach(address => {
      let regEx = new RegExp(address, "i")
      filteredEntities = filteredEntities.filter(entity => regEx.test(entity.programAddress))
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

let deleteInformalEntity = async (req, res) => {
  let informalEntityId = req.params.id;
  try {
    let deletedInformalEntity = await Informal.findOneAndDelete({
      _id: informalEntityId,
    });
    res.json(deletedInformalEntity);
  } catch (err) {
    res.status(404).json(err);
  }
};

let updateInformalEntity = async (req, res) => {
  let informalEntityId = req.params.id;
  try {
    let updatedInformalEntity = await Informal.findByIdAndUpdate(
      {
        _id: informalEntityId,
      },
      req.body
    );
    res.json(updatedInformalEntity);
  } catch {
    res.status(404).json(err);
  }
};



module.exports = {
  getInformalEntities,
  getInformalEntity,
  postInformalEntity,
  filterInformalEntities,
  deleteInformalEntity,
  updateInformalEntity,
  getAllInformalEntities
}
