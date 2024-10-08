export async function GET(request) {
    const users = [
      {
        user_id: 1,
        username: "samsoy",
        name: "Samantha",
        avatar_url:
          "https://api.dicebear.com/9.x/personas/svg?seed=Sammy&backgroundColor=b6e3f4",
        ingredients_used: [],
        favourite_recipes: [],
      },
      {
        user_id: 2,
        username: "hazzaharissa",
        name: "Harry",
        avatar_url:
          "https://api.dicebear.com/9.x/personas/svg?seed=Tiger&backgroundColor=b6e3f4",
        ingredients: [],
        favourite_recipes: [],
      },
      {
        user_id: 3,
        username: "dotdough",
        name: "Dorothy",
        avatar_url:
          "https://api.dicebear.com/9.x/personas/svg?seed=Jasper&backgroundColor=b6e3f4",
        ingredients: [],
        favourite_recipes: [],
      },
      {
        user_id: 4,
        username: "calcauli",
        name: "Carl",
        avatar_url:
          "https://api.dicebear.com/9.x/personas/svg?seed=Spooky&backgroundColor=b6e3f4",
        ingredients: [],
        favourite_recipes: [],
      },
      {
        user_id: 5,
        username: "bellepepper",
        name: "Belle",
        avatar_url:
          "https://api.dicebear.com/9.x/personas/svg?seed=Mimi&backgroundColor=b6e3f4",
        ingredients: [],
        favourite_recipes: [],
      },
    ]; 
    return new Response (JSON.stringify(users))
}