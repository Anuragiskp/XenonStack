import Property from "../Schema/propertyModel.js";

export const input = async (req, res) => {
	try {
		const { 
            Suburb, 
            Rooms, 
            Type, 
            Price, 
            Method, 
            Date, 
            Distance, 
            Postcode, 
            Bedroom2, 
            Bathroom, 
            Car, 
            Landsize, 
            BuildingArea, 
            YearBuilt, 
            CouncilArea, 
            Regionname 
        } = req.body;

		const newProperty = new Property({
			Suburb, 
            Rooms, 
            Type, 
            Price, 
            Method, 
            Date, 
            Distance, 
            Postcode, 
            Bedroom2, 
            Bathroom, 
            Car, 
            Landsize, 
            BuildingArea, 
            YearBuilt, 
            CouncilArea, 
            Regionname
		});

		if (newProperty) {
			await newProperty.save();

			res.status(201).json({
				_id: newProperty._id,
				Suburb: newProperty.Suburb,
				Price: newProperty.Price
			});
		} else {
			res.status(400).json({ error: "Invalid Property data" });
		}
	} catch (error) {
		console.log("Error in input controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const fetchProperties = async (req, res) => {
	try {
		const properties = await Property.find();

		if (properties) {
			res.status(200).json(properties);
		} else {
			res.status(404).json({ error: "No properties found" });
		}
	} catch (error) {
		console.log("Error in fetchProperties controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};