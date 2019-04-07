export default (actionName) => {
    const PATH_HEAD = process.env.NODE_ENV == 'development' ? '/api' : '/v1';
    return PATH_HEAD + actionName;
}
