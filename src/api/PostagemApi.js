import Axios from "axios";

class PostagemApi {
    static baseUrl = "http://localhost:8888";
  
    static getAll() {
      return Axios.get(`${this.baseUrl}/Postagens`);
    }
  
    static getById(id) {
      return Axios.get(`${this.baseUrl}/Postagem/${id}`);
    }
  
    static add(Postagem) {
      return Axios.post(`${this.baseUrl}/Postagem`, Postagem);
    }
  }
  
  export default PostagemApi;
  