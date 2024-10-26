export const formatDate = (dateTime) => {
  const originalDate = dateTime;

  const date = new Date(originalDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};

export const formatDateFech = (datetime) => {
  const originalDate = datetime;
  const date = new Date(originalDate);


  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hour}:${minutes}`;

  return formattedDate;
};
