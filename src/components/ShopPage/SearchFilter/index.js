import React from 'react'

function index() {

    
  return (
    <div>
<h2 class="container__title">CUSTOM DROPDOWN</h2>
<div class="container">
	<div class="select-dropdown">
		<button href="#" role="button" data-value="" class="select-dropdown__button"><span>SELECT ITEMS </span> <i class="zmdi zmdi-chevron-down"></i>
		</button>
		<ul class="select-dropdown__list">
			<li data-value="1" class="select-dropdown__list-item">Item 1</li>
			<li data-value="2" class="select-dropdown__list-item">Item 2</li>
			<li data-value="3" class="select-dropdown__list-item">Item 3</li>
			<li data-value="4" class="select-dropdown__list-item">Item 4</li>
		</ul>
	</div>
</div>


    </div>
  )
}

export default index