import {db} from "./setting/setFireStore";

const getProjectData = async () => {
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

const getRecentData = async () => {
    let getDataRow = []
    const getData = await db.collection('projects').limit(1).get();

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
    getProjectData,
    getRecentData
}