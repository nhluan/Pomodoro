import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h3 className='title'>An online Pomodoro Timer to boost your productivity</h3>

            <div className='intro'>
                <h4>
                    What is Pomofocus?
                </h4>

                <p>
                    Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
                </p>
            </div>

            <div className='intro'>
                <h4>
                    What is Pomodoro Technique?
                </h4>

                <p>
                    The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia
                </p>
            </div>

            <div className='intro'>
                <h4>
                    How to use the Pomodoro Timer?
                </h4>

                <ul>
                    <li>Add tasks to work on today</li>
                    <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
                    <li>Select a task to work on</li>
                    <li>Start timer and focus on the task for 25 minutes</li>
                    <li>Take a break for 5 minutes when the alarm ring</li>
                    <li>Iterate 3-5 until you finish the tasks</li>
                </ul>
            </div>

            <div className='intro'>
                <h4>
                    Basic Features
                </h4>

                <ul>
                    <li>
                        Estimate Finish Time: Get an estimate of the time required to complete your daily tasks.</li>
                    <li>
                        Add Templates: Save your repetitive tasks as templates and add them with just one click.
                    </li>
                    <li>
                        Visual Reports: See how much time you've focused each day, week, and month.
                    </li>
                    <li>
                        Custom Settings: Personalize your focus/break time, alarm sounds, background sounds, and more.
                    </li>
                </ul>
            </div>

            <div className='intro'>
                <h4>
                    Premium Features
                </h4>

                <ul>
                    <li>
                        Add Projects: Track how much time you spend on each project.
                    </li>
                    <li>
                        Yearly Reports: View your focus hours for each year.
                    </li>

                    <li>
                        Download Reports: Download your focus history in CSV format.
                    </li>

                    <li>
                        No Template Limit: Save more than 3 templates.
                    </li>


                    <li>
                        Todoist Integration: Load tasks from your Todoist account.
                    </li>

                    <li>
                        No Ads: Enjoy a clean and distraction-free app experience.
                    </li>
                </ul>

            </div>

            <div className='intro'>
                <h4>
                    Download App
                </h4>

                <ul>
                    <li>
                        For macOS (zip file) *Right click the icon to open
                    </li>

                    <li>
                        For Windows (zip file)
                    </li>
                </ul>
            </div>

            <hr />

            <div className='end-footer'>
                <ul className='navbar'>
                    <li>HOME</li>
                    <li>PRIVACY</li>
                    <li>CONTACT</li>
                    <li>SIMLE PAGE</li>
                </ul>

                <ul className='icons'>
                    <li style={{
                        color: "blue"
                    }}>
                        <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li style={{
                        color: "#1da1f2"
                    }}>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li style={{
                        color: 'red'
                    }}>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                </ul>

                <p>
                    Made with by <b>NHLuan</b>
                </p>
            </div>


        </div>
    )
}

export default Footer; 