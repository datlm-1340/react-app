class User::PostsController < User::BaseController
  def index
    respond_to do |format|
      format.html
      format.json do
        posts = Post.page(params[:page]).per(params[:limit])
        render json: {
          posts: posts.as_json,
          is_truncated: posts.last_page?,
          status: "success"
        }
      end
    end
  end

  def show
    @post = Post.find(params[:id]).as_json
  end
end
