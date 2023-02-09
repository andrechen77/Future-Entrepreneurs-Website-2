import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function PopupPrompt() {
	return (
		<div>
			<Popup trigger=
				{<button> Donate Here </button>}
				modal nested>
				{
					close => (
						<div className='modal'>
							<div className='content'>
								<p>
									Donate Here: 
								</p>
								<button> $10 </button>
								<button> $25 </button>
								<button> $50 </button>
								<button> $100 </button>
								<button> $250 </button>
								<button> $1000 </button>
								<form>
									<label>
										Other:
										<input type="text" name="OtherDonation" />
									</label>
									<input type="submit" value="Donate" />
								</form>
							</div>
							<div>
								<button onClick=
									{() => close()}>
										Close
								</button>
							</div>
						</div>
					)
				}
			</Popup>
		</div>
	)
};
