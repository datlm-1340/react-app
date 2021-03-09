class Admin::PostsController < Admin::BaseController
  def index
    respond_to do |format|
      format.html
      format.json do
        render json: {
          posts: load_posts
        }
      end
    end
  end

  def show
    @post = Post.find(params[:id]).as_json
  end

  private
  def load_posts
    posts = Post.order(id: :desc).map do |post|
      {
        key: post.id,
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        created_at: post.created_at.strftime("%m/%d/%Y %H:%M")
      }
    end

    posts.as_json
  end
end
