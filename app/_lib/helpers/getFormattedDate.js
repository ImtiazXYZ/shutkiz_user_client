export default function getFormattedDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-GB');
    return formattedDate;
}