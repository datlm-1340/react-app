class User::PostsController < User::BaseController
  def index
    respond_to do |format|
      format.html do
        @posts = Post.last(2).to_json
      end
      format.json do
        render json: {
          posts: Post.last(2),
          status: "success"
        }
      end
    end
  end
end
