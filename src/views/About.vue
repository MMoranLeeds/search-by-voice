<template>
  <div class="about">
    <h1>This is an about page</h1>

    <main>
      <div class="input-container">
        <label for="email"> Email address </label>

        <input
          name="email"
          id="email"
          type="email"
          placeholder="e.g joe.wade@fruugo.com"
        />
      </div>

      <div class="input-container">
        <label for="phone"> Phone number </label>

        <input
          name="phone"
          id="phone"
          type="number"
          placeholder="e.g 07759 952035"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
:root{
  --fruugo-secondary: #1b7fbf;
}
main {
  margin: 50px;
  max-width: 400px;
}

.input-container{
  &:not(:last-of-type){
    margin-bottom: 20px;
  }
}

label {
  padding-bottom: 10px;
  display: block;
  font-size: 20px;
  font-weight: 500;
}

input {
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding: 15px;
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  transition: all 0.3s;
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.25);
    border-color: var(--fruugo-secondary);
  }
}

::placeholder,
:-ms-input-placeholder,
::-ms-input-placeholder {
  color: #5f6368;
}
</style>