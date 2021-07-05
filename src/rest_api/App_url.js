class App_url{

    static base_url = 'http://127.0.0.1:8000'

    static userSighUp =this.base_url+'/userSighUp'
    static userSighIn =this.base_url+'/userSighIn'
    static allUser =this.base_url+'/allUser'
    static addBlog =this.base_url+'/addBlog'
    static deleteBlog =this.base_url+'/deleteBlog'
    static BlogListByPf =this.base_url+'/BlogListByPf'
    static GetAllBlog =this.base_url+'/GetAllBlog'
    static getBlog =this.base_url+'/getBlog'
    static getBlogByid =this.base_url+'/getBlogByid'

    static addComment =this.base_url+'/addComment'
    static getCommentByBlog =this.base_url+'/getCommentByBlog'
}
export default App_url