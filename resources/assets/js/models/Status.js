class Status{

    static all(){
        return axios.get('/statuses');
    }

}

export default Status;
