<div class="lg:w-1/2 md:w-3/4 sm:11/12 m-auto"> 
    <h1 class="text-2xl font-bold text-center text-darkShade">Contact Me</h1>
    <p class="text-left font-bold text-darkAccent">Interested in working together or just want to say hi? Fill out the form below and I'll be in touch soon.</p>
    <form class="mt-4" id="contactForm">
        <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-md text-darkShade" for="name">Name</label>
            <input class="border py-2 px-3 text-darkShade" type="text" id="name" value={name} />
        </div>
        <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-md text-darkShade" for="email">Email</label>
            <input class="border py-2 px-3 text-darkShade" type="email" id="email" value={email} />
        </div>
        <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-md text-darkShade" for="company">Company and Role</label>
            <input class="border py-2 px-3 text-darkShade" type="text" id="company" value={company} />
        </div>
        <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-md text-darkShade" for="message">Message</label>
            <textarea class="border py-2 px-3 text-darkShade" id="message" value={message} ></textarea>
        </div>
        <div class="flex flex-col mb-4">
            <button on:click={submitContactForm}
                class="bg-main hover:bg-darkAccent text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
            </button>
        </div>
    </form>
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
    import { PUBLIC_CONTACT_API } from '$env/static/public';
    let name: string;
    let email: string;
    let company: string;
    let message: string;

    async function submitContactForm(e: Event) {
        e.preventDefault();
        if (!validateForm()) {
            alert('Please fill out all fields and try again.');
            return;
        }
        // get api url from public env variable
        const url = PUBLIC_CONTACT_API;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                company,
                message
            })
        });
        if (response.status === 200) {
            goto(`/contact/success`, { replaceState: true });
        } else {
            alert('Something went wrong. Please try again.');
        }
    }

    // function to ensure all fields are filled out
    function validateForm() {
        if (name === '' || email === '' || company === '' || message === '') {
            return false;
        }
        return true;
    }
</script>
