import { atom, selector } from 'recoil';


export const NetworkAtom = atom({
    key: "networkatom",
    default: 102
});


export const jobsAtom = atom({
    key: "jobsatom",
    default: 0
});



export const NotificationAtom = atom({
    key: "notification",
    default: 0
});


export const MesssageAtom = atom({
    key: "massageatom",
    default: 12
});


export const finalTotalSelector = selector({
    key: "finaltotal",
    get: ({get}) => {
        const NetworkAtomCount = get(NetworkAtom);
        const jobsAtomCount = get(jobsAtom);
        const NotificationAtomCount = get(NotificationAtom);
        const MesssageAtomCount = get(MesssageAtom);
        return NetworkAtomCount + jobsAtomCount + NotificationAtomCount + MesssageAtomCount
    }
})
