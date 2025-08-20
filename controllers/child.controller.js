import Child from '../models/child.models.js'

//create a child
export const createChild = async (req,res) => {
    try {
        const { parentId, name, age, avatarUrl } = req.body;
        const child = new Child({parentId, name, age, avatarUrl});
        await child.save();

        res.status(201).json(child);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get all children from parent
export const getChildrenByParent = async (req, res) => {
    try{
        const { parentId } = req.params;
        const children = await Child.find({ parentId });
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update a child
export const updateChild = async (req, res) => {
    try{
        const child = await Child.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        res.status(200).json(child);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

//delete a child
export const deleteChild = async (req, res) => {
    try {
        await Child.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Child deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

