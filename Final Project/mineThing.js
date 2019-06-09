(function ($)
{
	var Game = function(gameElement)...;
	var Field = function(element, x, y)...;
	var board = function(element, dimension, mines)...;

	$.fn.minesweeper = function()
	{
		Game(this);
		return this;
	}
}(jQuery))