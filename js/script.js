$( document ).ready( documentReady );

function documentReady()
{
	$( '.popup-button' ).click( createPopUp );
}

function createPopUp( e )
{

	$( 'body' ).append(
		`<div class="popup">
            <h1>Successfully signed up!</h1>
            <p>Congratulations, you have signed up for the event! You will receive a reminder the day before it starts. You can find your currently signed up events in the calendar.</p>
            <a href="#" class="close-btn">OK</a>
         </div>`
    );

	$( '.close-btn' ).click( removePopUp );

}

function removePopUp( e )
{
	$( '.popup' ).remove();
}