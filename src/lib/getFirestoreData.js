import {db} from "./setting/setFireStore";

const getTestData = async () => {
    let getDataRow = []
    const getData = await db.collection('projects').get();

    getData.forEach(docs => {
        const doc = docs.data();
        getDataRow.push({
            id:docs.id,
            title : doc.title,
            desc : doc.desc,
            images : doc.images
        })
    })
    return getDataRow;
}

export {
    getTestData
}