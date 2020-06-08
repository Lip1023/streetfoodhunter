Table users as U {
  id int [pk, increment] 
  full_name string 
  user_id varchar 
  password varchar 
  created_at timestamp
}


Table food {
  id int [pk, increment]
  food_name varchar
  local_name varchar
  image_url string
  cuisine_name varchar

}

Table food_rep {
  id int [pk, increment]
  food_id int [ref: - food.id]
  rel_rep_id int [ref: - recipe.id]
}

Table recipe {
  id int  [pk, increment]
  name string 
  image_url string
  ingredient string
  cookingtime int
  difficulty int
  rating int
  created_at timestamp
  how_to string // json lateron
  admin_id int [ref: < U.id] 
  draft boolean
  appr_status boolean
 }
 
Table fav_recipe {
  id int [pk, increment]
  user_id int [ref: - U.id]
  rep_id int [ref: - recipe.id]
  created_at timestamp
}
 
Table comment {
  id int  [pk, increment]
  user_id int [ref: - U.id]
  rep_id int [ref: - recipe.id]
  comment_content string
  created_at timestamp
 }
 
Table recipe_tag {
   id int [pk, increment]
   recipe_id  int [ref: - recipe.id]
   tag_id int
 }
 
Table tag {
   id int [pk, increment]
   tag_id int [ref: - recipe_tag.tag_id]
   name varchar 
 }
 

