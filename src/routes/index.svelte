<div class="search-container">
  <h1 class="title">Search a Word</h1>
  <div class="search-box">
     <input type="text" class="search-input" placeholder="Search..">

     <button class="search-button">
       <i class="fas fa-search"></i>
     </button>
  </div>
</div>
<div class="definition-container">

</div>
<style>
.search-container{
  width: 35%;
  position: absolute;
  left: 50%;
  top: 10%; 
  transform: translate(-50% , -50%);
}

.title {
  font-family: monospace;
  text-align: center;
  font-weight: 900;
  font-size: 3em;
}

.search-box{
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.search-input{
  width: 100%;
  padding: 10px;
  border: 4px solid #111d5e;
  border-radius:10px 0 0 10px ;
  border-right: none;
  outline: none;
  font-size: 20px;
  color:burlywood;
  background: none;
}
.search-button{
  text-align: center;
  height: 51px;
  width: 40px;
  outline: none;
  cursor: pointer;
  border: 4px solid #111d5e;
  border-radius: 0 10px 10px 0 ;
  border-left: none;
  background: none;
  font-size: 20px;
  border-left: 4px solid #111d5e; 
  }
</style>
