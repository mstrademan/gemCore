<template>
    <div class="links">
        <NLink :to="{name: 'cabinet-edit'}" class="button--green">Profile settings</NLink>
        <NLink :to="{name: 'cabinet-notes'}" class="button--grey">Notes</NLink>
        <NLink :to="{name: 'cabinet-partners'}" class="button--grey">Personal partners</NLink>
        <slot></slot>
    </div>
</template>
