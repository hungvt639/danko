import getInstanceAxios from "./request";

const url =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfHYr_zZLQaVEhiScucV-oww75LUAXTOHhlixZMri-8ONajiA/formResponse";

export default function instanceAxios() {
    return getInstanceAxios(url);
}
