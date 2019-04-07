import qs from  'qs'
export default (params) => {
    return qs.stringify(params);
}
