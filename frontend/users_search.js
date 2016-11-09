class UsersSearch {
  constructor(element){
    this.$el = $(element);
    this.$input = this.$el.find("input[name=username]");
    this.$ul = this.$el.find("users");

    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(event){
    if (this.$input.val() === ""){
      this.renderResults([]);
      return;
    }

    $.ajax({
      url: "/artists/search",
      method: "get",
      data: {query: this.$input.val()},
      dataType: "JSON",
      success: this.renderResults.bind(this)
    });
  }

  renderResults(){
    
  }
}
