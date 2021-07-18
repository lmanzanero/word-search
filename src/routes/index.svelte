<script>
  import { word, searchWord } from '../stores/wordStore';   
  console.log($word);
  let searchInput 

	function handleClick() {
    console.log("clicked", $word);
		searchWord();
	}
</script>
<div class="search-container">
  <h1 class="title">Search a Word</h1>
  <div class="search-box">
     <input bind:value={searchInput} type="text" class="search-input" placeholder="Search..">
     <button class="search-button" on:click={handleClick}>
       <i class="fas fa-search"></i>
     </button>
  </div>
</div>
<div class="definition-container"> 
  <div class="definitions"> 
    {#each $word.results as definitions}
      <p class="definition">Definition: {definitions.definition}</p>
      <span>Part of Speech: {definitions.partOfSpeech}</span>
    {/each}
  </div>
</div>
<div class="word-extras"> 
  <div class="pronunciation">
    {$word.pronunciation.all}
  </div>
  <!-- //pronounciation
  //syllabels
  //syno -->
  <div class="syllables">
    {#each $word.syllables.list as syllable}
    <div class="syllable">
     { syllable }
    </div>
    {/each}
  </div>
</div>
<style> 
.search-container{
  width: 35%;
  position: absolute;
  left: 50%;
  top: 10%; 
  padding: 2em; 
  border-radius: 0.4em;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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

  .definition-container {
    position: relative;
    justify-content: center;
    width: 90vw; 
    margin-top: 200px;   
    padding: 1em;   
    margin-left: auto;
    margin-right: auto; 
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .word-extras {
    display: flex;
    flex-direction: row;
  }

  .word-extras .pronunciation {
    background-color: bisque;
    height: 100px;
    padding: 1em;
    display: grid;
    place-items: center;
  }

  .word-extras .syllables {
    display: flex;
    flex-direction: row;
  }

  .word-extras .syllables .syllable {
     font-size: 3em; 
     letter-spacing: 0.2em;
  }
</style>
